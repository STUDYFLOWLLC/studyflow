import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { FlashcardStackRelationFilter } from "../inputs/FlashcardStackRelationFilter";
import { FlowRelationFilter } from "../inputs/FlowRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { TaskListRelationFilter } from "../inputs/TaskListRelationFilter";

@TypeGraphQL.InputType("RepetitionWhereInput", {
  isAbstract: true
})
export class RepetitionWhereInput {
  @TypeGraphQL.Field(_type => [RepetitionWhereInput], {
    nullable: true
  })
  AND?: RepetitionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [RepetitionWhereInput], {
    nullable: true
  })
  OR?: RepetitionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [RepetitionWhereInput], {
    nullable: true
  })
  NOT?: RepetitionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  RepetitionID?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  CreatedTime?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => FlowRelationFilter, {
    nullable: true
  })
  FK_Flow?: FlowRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  FK_FlowID?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => FlashcardStackRelationFilter, {
    nullable: true
  })
  FK_FlashcardStack?: FlashcardStackRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  FK_FlashcardStackID?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => TaskListRelationFilter, {
    nullable: true
  })
  FK_Tasks?: TaskListRelationFilter | undefined;
}
