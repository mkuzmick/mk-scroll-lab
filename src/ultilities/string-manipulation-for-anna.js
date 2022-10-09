/**
 * Find and highlight relevant keywords within a block of text
 * @param  {string} label - The text to parse
 * @param  {string} value - The search keyword to highlight
 * @return {object} A JSX object containing an array of alternating strings and JSX
 */
 const formatLabel = (label, value) => {
    if (!value) {
      return label;
    }
    return (<span>
      { label.split(value)
        .reduce((prev, current, i) => {
          if (!i) {
            return [current];
          }
          return prev.concat(<b key={value + current}>{ value }</b>, current);
        }, [])
      }
    </span>);
  };
  
  formatLabel('Lorem ipsum dolor sit amet', 'dolor');
  // <span>Lorem ipsum <b>dolor</b> sit amet</span>