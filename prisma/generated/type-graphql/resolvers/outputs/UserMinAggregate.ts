import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Visibility } from "../../enums/Visibility";

@TypeGraphQL.ObjectType("UserMinAggregate", {
  isAbstract: true
})
export class UserMinAggregate {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  UserID!: number | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  SetupComplete!: boolean | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  SupabaseID!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  Username!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  ProfilePictureLink!: string | null;

  @TypeGraphQL.Field(_type => Visibility, {
    nullable: true
  })
  DefaultVisibility!: "HIDDEN" | "PRIVATE" | "PUBLIC" | null;
}
