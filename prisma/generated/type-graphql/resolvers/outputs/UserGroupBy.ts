import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserAvgAggregate } from "../outputs/UserAvgAggregate";
import { UserCountAggregate } from "../outputs/UserCountAggregate";
import { UserMaxAggregate } from "../outputs/UserMaxAggregate";
import { UserMinAggregate } from "../outputs/UserMinAggregate";
import { UserSumAggregate } from "../outputs/UserSumAggregate";
import { SetupStep } from "../../enums/SetupStep";
import { Visibility } from "../../enums/Visibility";

@TypeGraphQL.ObjectType("UserGroupBy", {
  isAbstract: true
})
export class UserGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  UserID!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  CreatedTime!: Date;

  @TypeGraphQL.Field(_type => SetupStep, {
    nullable: false
  })
  SetupStep!: "PROFILE" | "EDUCATION" | "COMMUNITY" | "COMPLETE";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  SupabaseID!: string;

  @TypeGraphQL.Field(_type => Visibility, {
    nullable: false
  })
  DefaultVisibility!: "HIDDEN" | "PRIVATE" | "PUBLIC";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  Email!: string;

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
    nullable: false
  })
  HasRequestedAutomationAccess!: boolean;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  HasAutomationAccess!: boolean | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  FK_SchoolID!: number | null;

  @TypeGraphQL.Field(_type => UserCountAggregate, {
    nullable: true
  })
  _count!: UserCountAggregate | null;

  @TypeGraphQL.Field(_type => UserAvgAggregate, {
    nullable: true
  })
  _avg!: UserAvgAggregate | null;

  @TypeGraphQL.Field(_type => UserSumAggregate, {
    nullable: true
  })
  _sum!: UserSumAggregate | null;

  @TypeGraphQL.Field(_type => UserMinAggregate, {
    nullable: true
  })
  _min!: UserMinAggregate | null;

  @TypeGraphQL.Field(_type => UserMaxAggregate, {
    nullable: true
  })
  _max!: UserMaxAggregate | null;
}
