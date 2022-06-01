import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFilter } from "../inputs/BoolFilter";
import { CourseOnUserListRelationFilter } from "../inputs/CourseOnUserListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumVisibilityNullableFilter } from "../inputs/EnumVisibilityNullableFilter";
import { FlashCardStackListRelationFilter } from "../inputs/FlashCardStackListRelationFilter";
import { FlowListRelationFilter } from "../inputs/FlowListRelationFilter";
import { FlowTagListRelationFilter } from "../inputs/FlowTagListRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("UserWhereInput", {
  isAbstract: true
})
export class UserWhereInput {
  @TypeGraphQL.Field(_type => [UserWhereInput], {
    nullable: true
  })
  AND?: UserWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereInput], {
    nullable: true
  })
  OR?: UserWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereInput], {
    nullable: true
  })
  NOT?: UserWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  UserID?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  CreatedTime?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  SetupComplete?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  SupabaseID?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  Email?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  Name?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  Username?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  ProfilePictureLink?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => EnumVisibilityNullableFilter, {
    nullable: true
  })
  DefaultVisibility?: EnumVisibilityNullableFilter | undefined;

  @TypeGraphQL.Field(_type => CourseOnUserListRelationFilter, {
    nullable: true
  })
  FK_Courses?: CourseOnUserListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => FlowListRelationFilter, {
    nullable: true
  })
  FK_Flows?: FlowListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => FlowTagListRelationFilter, {
    nullable: true
  })
  FK_FlowTags?: FlowTagListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => FlashCardStackListRelationFilter, {
    nullable: true
  })
  FK_FlashCardStacks?: FlashCardStackListRelationFilter | undefined;
}
