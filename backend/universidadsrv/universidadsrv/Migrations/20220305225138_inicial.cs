using Microsoft.EntityFrameworkCore.Migrations;

namespace universidadsrv.Migrations
{
    public partial class inicial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Favoritos",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    name = table.Column<string>(type: "varchar(100)", nullable: false),
                    country = table.Column<string>(type: "varchar(16)", nullable: false),
                    web_pages = table.Column<string>(type: "varchar(100)", nullable: false),
                    image = table.Column<string>(type: "varchar(200)", nullable: false),
                    Status = table.Column<string>(type: "varchar(1)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Favoritos", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Universidades",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    name = table.Column<string>(type: "varchar(100)", nullable: false),
                    country = table.Column<string>(type: "varchar(16)", nullable: false),
                    web_pages = table.Column<string>(type: "varchar(100)", nullable: false),
                    image = table.Column<string>(type: "varchar(200)", nullable: false),
                    Status = table.Column<string>(type: "varchar(1)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Universidades", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Favoritos");

            migrationBuilder.DropTable(
                name: "Universidades");
        }
    }
}
