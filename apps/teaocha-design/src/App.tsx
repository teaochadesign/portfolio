import {
  Redirect,
  Route,
  Switch,
  useHistory,
  useRouteMatch,
} from 'react-router-dom'
import { Background } from './components/Background'
import {
  Header,
  HeaderMode,
} from './components/Header'
import { NotFound } from './scenes/NotFound'
import { redirects, routes } from './routes'
import classNames from './App.scss'

/*
@description
Entrypoint component for the application.
Deals primarily with routing etc.
*/
export function App(): JSX.Element {
  const history = useHistory()
  const isHome = !!useRouteMatch({ path: '/', exact: true })

  const navItems = Object.values(routes).map(
      route => ({
      ...route,
      onClick: () => {
        history.push(route.href)
      },
      // The home page is more of a splash-screen so it doesn't
      // make sense for that to be a visible route when the user is
      // on that page.
      hidden: route.hidden || (route.key === 'home' && isHome),
    })
  )

  return (
    <div data-testid={'TeaochaDesign-App-root'}>
      <Background />
      <Header
        navItems={navItems}
        mode={isHome ? HeaderMode.Central : HeaderMode.Top}
      />
      <main className={classNames['main']} >
        <Switch>
          {
            Object.values(redirects).map(
              redirect => (
                <Route
                  key={redirect.key}
                  path={redirect.from}
                  exact={redirect.exact}
                >
                  <Redirect to={redirect.to} />
                </Route>
              )
            )
          }
          {
            Object.values(routes).map(
              route => (
                <Route
                  key={route.key}
                  path={route.href}
                  exact={route.exact}
                  component={route.component || NotFound}
                />
              )
            )
          }
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </main>
    </div>
  )
}

export default App