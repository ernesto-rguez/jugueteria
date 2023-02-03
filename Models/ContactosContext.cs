using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace jugueteria.Models;

public partial class ContactosContext : DbContext
{
    public ContactosContext()
    {
    }

    public ContactosContext(DbContextOptions<ContactosContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Person> Persons { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Server=(local); DataBase=contactos; Trusted_Connection=True; TrustServerCertificate=True;");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Person>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__persons__3214EC0736B36B2D");

            entity.ToTable("persons");

            entity.Property(e => e.Apellido)
                .HasMaxLength(40)
                .IsUnicode(false);
            entity.Property(e => e.Domicilio).HasColumnType("text");
            entity.Property(e => e.Nombre)
                .HasMaxLength(40)
                .IsUnicode(false);
            entity.Property(e => e.Telefono)
                .HasMaxLength(40)
                .IsUnicode(false);
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
