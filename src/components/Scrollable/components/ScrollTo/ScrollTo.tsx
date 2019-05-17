import React from 'react';
import {createUniqueIDFactory} from '@shopify/javascript-utilities/other';
import ScrollableContext from '../../context';

export default function ScrollTo() {
  const anchorNode = React.useRef<HTMLAnchorElement>(null);
  const {scrollToPosition} = React.useContext(ScrollableContext);

  React.useEffect(() => {
    if (!scrollToPosition || !anchorNode.current) {
      return;
    }

    scrollToPosition(anchorNode.current.offsetTop);
  }, []);

  const getUniqueId = createUniqueIDFactory(`ScrollTo`);
  // eslint-disable-next-line jsx-a11y/anchor-is-valid
  return <a id={getUniqueId()} ref={anchorNode} />;
}
