import { BookMarkInterface } from '../../interfaces/interfaces';
export class HelperReducer {
  groupAndSubList(array: BookMarkInterface[]) {
    return Object.values(
      array.reduce((result, { group, id, link, linkForIframe, title, img }) => {
        // Create new group
        if (!result[group])
          result[group] = {
            group,
            groups: [],
          };
        // Append to group
        result[group].groups.push({
          id,
          link,
          title,
          linkForIframe,
          group,
          img,
        });
        return result;
      }, {})
    );
  }

  counterGroups(array: BookMarkInterface[]) {
    return array.reduce(function (r, a) {
      //agrupacion de bookmar
      r[a.group] = r[a.group] || [];
      r[a.group].push(r[a.group]);
      return r;
    }, Object.create(null));
    // Agrupadno por grupos los distintos objetos de elementos creados
  }

}
