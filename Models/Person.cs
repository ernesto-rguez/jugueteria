using System;
using System.Collections.Generic;

namespace jugueteria.Models;

public partial class Person
{
    public int Id { get; set; }

    public string Nombre { get; set; } = null!;

    public string Apellido { get; set; } = null!;

    public string? Domicilio { get; set; }

    public string? Telefono { get; set; }
}
