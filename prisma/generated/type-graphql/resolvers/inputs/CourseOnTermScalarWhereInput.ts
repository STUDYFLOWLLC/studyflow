import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("CourseOnTermScalarWhereInput", {
  isAbstract: true
})
export class CourseOnTermScalarWhereInput {
  @TypeGraphQL.Field(_type => [CourseOnTermScalarWhereInput], {
    nullable: true
  })
  AND?: CourseOnTermScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CourseOnTermScalarWhereInput], {
    nullable: true
  })
  OR?: CourseOnTermScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CourseOnTermScalarWhereInput], {
    nullable: true
  })
  NOT?: CourseOnTermScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  CourseOnTermID?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  CreatedTime?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  Color?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  Nickname?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  FK_CourseID?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  FK_TermID?: IntFilter | undefined;
}
