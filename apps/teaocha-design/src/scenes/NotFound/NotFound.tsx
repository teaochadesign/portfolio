import { MainContent } from '@/apps/teaocha-design/src/components/MainContent'
import { translate } from '@/apps/teaocha-design/src/i18n'

/*
@description
Default page to show when the route doesn't exist.
*/
export function NotFound(): JSX.Element {
  return (
    <MainContent>
      <div data-testid={'Scene-NotFound'}>
        <h1>{translate('pages.notFound.pageTitle')}</h1>
      </div>
    </MainContent>
  )
}