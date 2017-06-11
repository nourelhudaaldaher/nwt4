namespace NWT4.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class InitialCreate : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Comment",
                c => new
                    {
                        Id = c.Long(nullable: false, identity: true),
                        Name = c.String(),
                        Content = c.String(),
                        Score = c.Int(nullable: false),
                        Date = c.DateTime(nullable: false),
                        Game_Id = c.Long(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Game", t => t.Game_Id)
                .Index(t => t.Game_Id);
            
            CreateTable(
                "dbo.Game",
                c => new
                    {
                        Id = c.Long(nullable: false, identity: true),
                        Name = c.String(),
                        ShortDescription = c.String(),
                        FullDescription = c.String(),
                        Price = c.Double(nullable: false),
                        ImageUrl = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Comment", "Game_Id", "dbo.Game");
            DropIndex("dbo.Comment", new[] { "Game_Id" });
            DropTable("dbo.Game");
            DropTable("dbo.Comment");
        }
    }
}
