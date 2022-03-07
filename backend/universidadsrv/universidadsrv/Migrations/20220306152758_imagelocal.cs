using Microsoft.EntityFrameworkCore.Migrations;

namespace universidadsrv.Migrations
{
    public partial class imagelocal : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "imagelocal",
                table: "Favoritos",
                type: "varchar(400)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "imagelocal",
                table: "Favoritos");
        }
    }
}
