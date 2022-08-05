import React from 'react';
import { memoizeFunction } from '@teaocha/ui-common';
import _classNames from './MainContent.scss';

export interface IMainContent {
  children: React.ReactElement<any>,
  className?: string,
}

const makeClassNames = memoizeFunction(
  (rootClassName?: string) => {
    const classNames = { ..._classNames };

    if (rootClassName) {
      classNames.root = `${classNames.root} ${rootClassName}`;
    }

    return classNames;
  },
);

/*
@ description
Styles wrapper for the content of a <main> element of a page.
This element ensures that main content has a maximum width and
resizes with the screen accordingly. It will also deal with any
enter/exit animations etc.
*/
export function MainContent(props: IMainContent): React.ReactElement<any> {
  const classNames = makeClassNames(props.className);

  return (
    <div
      data-testid="MainContent"
      className={classNames.root}
    >
      {props.children}
    </div>
  );
}
