import React from 'react';
import {
  Image,
  ImageFit,
} from '@teaocha/ui-common';
import { theme } from '@/apps/teaocha-design/src/theme';

import imgBgLeft from '@/apps/teaocha-design/assets/images/background/backgroundLeft.svg';
import imgBgRight from '@/apps/teaocha-design/assets/images/background/backgroundRight.svg';
import imgSteam1 from '@/apps/teaocha-design/assets/images/background/steam1.svg';
import imgSteam2 from '@/apps/teaocha-design/assets/images/background/steam2.svg';
import imgSteam3 from '@/apps/teaocha-design/assets/images/background/steam3.svg';
import imgTable from '@/apps/teaocha-design/assets/images/background/table.svg';
import imgTeacup from '@/apps/teaocha-design/assets/images/teacup.svg';
import classNames from './Background.scss';

/*
@background
Deals with background imagery, animations, dynamic loading etc.
*/
export function Background(): React.ReactElement<any> {
  return (
    <div
      data-semantic-tag="Background"
      className={classNames.root}
      style={{ backgroundColor: theme.palette.white }}
      aria-hidden
    >
      <Image
        src={imgBgLeft}
        className={classNames['bg-left']}
        imageFit={ImageFit.contain}
        aria-hidden
      />
      <Image
        src={imgBgRight}
        className={classNames['bg-right']}
        imageFit={ImageFit.contain}
        aria-hidden
      />
      <Image
        src={imgTable}
        className={classNames.table}
        imageFit={ImageFit.contain}
        aria-hidden
      />
      <Image
        src={imgTeacup}
        className={classNames.teacup}
        imageFit={ImageFit.contain}
        aria-hidden
      />
      <Image
        src={imgSteam1}
        className={classNames['steam-1']}
        imageFit={ImageFit.contain}
        aria-hidden
      />
      <Image
        src={imgSteam2}
        className={classNames['steam-2']}
        imageFit={ImageFit.contain}
        aria-hidden
      />
      <Image
        src={imgSteam3}
        className={classNames['steam-3']}
        imageFit={ImageFit.contain}
        aria-hidden
      />
    </div>
  );
}

export default Background;
