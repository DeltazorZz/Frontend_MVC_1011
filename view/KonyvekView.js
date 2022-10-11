import KonyvView from "./view/KonyvView.js"

class KonyvekView {
  constructor(tomb, parent) {
    parent.append(` 
            <table><tr>
            <td>id</td>
            <td>cím</td>
            <td>szerző</td>
            <td>ár</td>
            </tr></table>`);
  this.tabla = parent.children("table:last-child");

  tomb.forEach((konyv)=> {
    new KonyvekView();
  });
        }
}
export default KonyvekView;
