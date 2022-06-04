import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";

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

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  FK_CourseID?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  FK_TermID?: IntNullableFilter | undefined;
}
