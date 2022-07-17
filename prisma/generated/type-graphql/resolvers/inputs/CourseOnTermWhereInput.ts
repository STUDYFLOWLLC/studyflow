import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFilter } from "../inputs/BoolFilter";
import { CourseRelationFilter } from "../inputs/CourseRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { FlowListRelationFilter } from "../inputs/FlowListRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { TaskListRelationFilter } from "../inputs/TaskListRelationFilter";
import { TermRelationFilter } from "../inputs/TermRelationFilter";

@TypeGraphQL.InputType("CourseOnTermWhereInput", {
  isAbstract: true
})
export class CourseOnTermWhereInput {
  @TypeGraphQL.Field(_type => [CourseOnTermWhereInput], {
    nullable: true
  })
  AND?: CourseOnTermWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CourseOnTermWhereInput], {
    nullable: true
  })
  OR?: CourseOnTermWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CourseOnTermWhereInput], {
    nullable: true
  })
  NOT?: CourseOnTermWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  CourseOnTermID?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  CreatedTime?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  Index?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  Color?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  Nickname?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  IsNew?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => CourseRelationFilter, {
    nullable: true
  })
  FK_Course?: CourseRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  FK_CourseID?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => TermRelationFilter, {
    nullable: true
  })
  FK_Term?: TermRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  FK_TermID?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => FlowListRelationFilter, {
    nullable: true
  })
  FK_Flows?: FlowListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => TaskListRelationFilter, {
    nullable: true
  })
  FK_Tasks?: TaskListRelationFilter | undefined;
}
