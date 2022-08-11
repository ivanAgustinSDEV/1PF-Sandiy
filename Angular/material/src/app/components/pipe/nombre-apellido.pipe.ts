import { Pipe, PipeTransform } from "@angular/core";


@Pipe({ name: "customFilter" })
export class NombreApellido implements PipeTransform {
  transform(Usuario: { title: string; body: string }[], input: string) {
    if (!input) return Usuario;
    return Usuario.filter(val => this.filterBy(val, input));
  }

  private filterBy(
    Usuario: { title: string; body: string },
    search: string
  ) {
    const reduced = Object.keys(Usuario)
      .reduce((prev, current) => this.reduceKeys(prev, current, Usuario), "")
      .toLocaleLowerCase();
    return reduced.indexOf(search.toLocaleLowerCase()) > -1;
  }

  private reduceKeys(
    prev: string,
    current: string,
    Usuario: { title: string; body: string }
  ): string {
    if (this.isProp(current)) {

    }
    return prev;
  }

  //Aquí validas que propiedades quieres que se filtren.
  private isProp(key: string): boolean {
    return key.includes("apellido") || key.includes("nombre");
  }
}
