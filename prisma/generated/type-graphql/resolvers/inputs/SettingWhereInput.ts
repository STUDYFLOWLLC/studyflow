import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolNullableFilter } from "../inputs/BoolNullableFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType("SettingWhereInput", {
  isAbstract: true
})
export class SettingWhereInput {
  @TypeGraphQL.Field(_type => [SettingWhereInput], {
    nullable: true
  })
  AND?: SettingWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SettingWhereInput], {
    nullable: true
  })
  OR?: SettingWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SettingWhereInput], {
    nullable: true
  })
  NOT?: SettingWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  SettingID?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => BoolNullableFilter, {
    nullable: true
  })
  HasSeenWelcomeMessage?: BoolNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  LastSeenWelcomeMessageAt?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  FK_User?: UserRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  FK_UserID?: IntFilter | undefined;
}
