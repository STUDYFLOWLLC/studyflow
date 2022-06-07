import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseOnTermRelationFilter } from "../inputs/CourseOnTermRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumVisibilityNullableFilter } from "../inputs/EnumVisibilityNullableFilter";
import { FlashCardStackListRelationFilter } from "../inputs/FlashCardStackListRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("FlowWhereInput", {
  isAbstract: true
})
export class FlowWhereInput {
  @TypeGraphQL.Field(_type => [FlowWhereInput], {
    nullable: true
  })
  AND?: FlowWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlowWhereInput], {
    nullable: true
  })
  OR?: FlowWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlowWhereInput], {
    nullable: true
  })
  NOT?: FlowWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  FlowID?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  CreatedTime?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => FlashCardStackListRelationFilter, {
    nullable: true
  })
  FK_FlashCardStacks?: FlashCardStackListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  Title?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  Body?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => EnumVisibilityNullableFilter, {
    nullable: true
  })
  Visibility?: EnumVisibilityNullableFilter | undefined;

  @TypeGraphQL.Field(_type => CourseOnTermRelationFilter, {
    nullable: true
  })
  FK_CourseOnTerm?: CourseOnTermRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  FK_CourseOnTermID?: IntNullableFilter | undefined;
}
