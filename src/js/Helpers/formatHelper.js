export function formatArrayValues(markup) {
    //remove the Kontent RTE markup and return values as an array
    let obj = markup.split('<p class="kc-linked-item-wrapper">').join('').split('</p>');
    //remove empty items
    let values = obj.filter(item => item);
    //remove newlines
    values = values.map(item => item.replace('\n',''));
    
    return values;
  }