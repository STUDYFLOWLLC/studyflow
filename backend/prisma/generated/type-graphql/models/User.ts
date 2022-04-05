import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Flow } from "../models/Flow";
import { Visibility } from "../enums/Visibility";
import { UserCount } from "../resolvers/outputs/UserCount";

@TypeGraphQL.ObjectType("User", {
  isAbstract: true
})
export class User {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  UserID!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  Email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  UID?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  DisplayName?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  ProfilePictureLink?: string | null;

  @TypeGraphQL.Field(_type => Visibility, {
    nullable: true
  })
  DefaultVisibility?: "HIDDEN" | "PRIVATE" | "PUBLIC" | null;

  Flows?: Flow[];

  @TypeGraphQL.Field(_type => UserCount, {
    nullable: true
  })
  _count?: UserCount | null;
}
