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

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  Email!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  UID!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  DisplayName!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  ProfilePictureLink!: string | null;

  @TypeGraphQL.Field(_type => Visibility, {
    nullable: true
  })
  DefaultVisibility!: "HIDDEN" | "PRIVATE" | "PUBLIC" | null;
}
