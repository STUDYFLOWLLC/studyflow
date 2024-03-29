import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SetupStep } from "../../enums/SetupStep";
import { Visibility } from "../../enums/Visibility";

@TypeGraphQL.ObjectType("UserMinAggregate", {
  isAbstract: true
})
export class UserMinAggregate {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  UserID!: number | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  CreatedTime!: Date | null;

  @TypeGraphQL.Field(_type => SetupStep, {
    nullable: true
  })
  SetupStep!: "PROFILE" | "EDUCATION" | "COMMUNITY" | "COMPLETE" | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  SupabaseID!: string | null;

  @TypeGraphQL.Field(_type => Visibility, {
    nullable: true
  })
  DefaultVisibility!: "HIDDEN" | "PRIVATE" | "PUBLIC" | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  Email!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  Bio!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  About!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  Name!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  Username!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  ProfilePictureLink!: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  HasRequestedAutomationAccess!: boolean | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  HasAutomationAccess!: boolean | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  FK_SchoolID!: number | null;
}
