import { PrimaryButton } from '@/packages/ui-common/src/components/Button'
import { Link } from '@/packages/ui-common/src/components/Link'
import {
  Panel as Panel,
  PanelType as PanelType,
} from '@/packages/ui-common/src/components/Panel'
import {
  ITheme as ITheme,
  ThemeProvider as ThemeProvider,
} from '@/packages/ui-common/src/components/Theme'
import { useState } from 'react'
import classNames from './SideMenu.scss'

export type SideMenuNavItem = {
  key: string,
  title: string,
  onClick: (e: React.SyntheticEvent) => void,
  disabled?: boolean,
  hidden?: boolean,
}

export interface ISideMenuNavItemProps {
  children: string | JSX.Element,
  onClick: (e: React.SyntheticEvent) => void,
  disabled?: boolean,
}

function SideMenuNavItem(props: ISideMenuNavItemProps): JSX.Element {
  return (
    <Link
      onClick={props.onClick}
      role='menuitem'
      disabled={props.disabled}
      data-testid={'SideMenuNavItem'}
    >
      {props.children}
    </Link>
  )
}

//--------------------------------------------------------------------------------

export enum SideMenuToggleShape {
  Square,
  Bubble,
} 

export interface ISideMenuProps {
  title: string,
  navItems: SideMenuNavItem[],
  renderFooter?: () => JSX.Element,
  visible: boolean,
  theme?: ITheme,
  toggleShape?: SideMenuToggleShape,
}

/*
 * @description
 * Renders a hamburger menu which, when clicked, opens a menu panel from
 * the left hand side.
*/
export function SideMenu(props: ISideMenuProps): JSX.Element {
  const [ isOpen, setMenuOpen ] = useState(false)
  const toggleMenu = () => setMenuOpen(!isOpen)

  const navItems = props.navItems.filter(x => !x.hidden)

  let toggleShapeClass = classNames['toggle-shape-square']
  if (props.toggleShape === SideMenuToggleShape.Bubble) {
    toggleShapeClass = classNames['toggle-shape-bubble']
  }

  return (
    <div
      data-testid={'SideMenu'}
      className={classNames['root']}
    >
      {
        props.visible && (
          <PrimaryButton
            className={`${classNames['toggle']} ${toggleShapeClass}`}
            iconProps={{ iconName: 'GlobalNavButton' }}
            onClick={toggleMenu}
            data-testid={'SideMenu-toggle'}
          />
        )
      }
      <ThemeProvider theme={props.theme}>
        <Panel
          onDismiss={toggleMenu}
          type={PanelType.customNear}
          customWidth={'400px'}
          isOpen={isOpen}
          isBlocking
          isLightDismiss
          hasCloseButton
        >
          <div
            className={classNames['content']}
            data-testid={'SideMenu-panel'}
          >
            <nav
              aria-labelledby='sidemenu'
              data-testid={'SideMenu-navigation'}
            >
              <h2 id='sidemenu'>{props.title}</h2>
              <ul>
                {
                  navItems.map(
                    navItem => (
                      <li key={`sidemenuitem-${navItem.key}`}>
                        <SideMenuNavItem
                          onClick={
                            (e: React.SyntheticEvent) => {
                              toggleMenu()
                              navItem.onClick(e)
                            }
                          }
                          disabled={navItem.disabled}
                        >
                          {navItem.title}
                        </SideMenuNavItem>
                      </li>
                    )
                  )
                }
              </ul>
            </nav>
            {props.renderFooter && props.renderFooter()}
          </div>
        </Panel>
      </ThemeProvider>
    </div>
  )
}