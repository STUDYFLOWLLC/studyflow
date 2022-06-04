import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType("CourseOnTermScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class CourseOnTermScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [CourseOnTermScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: CourseOnTermScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [CourseOnTermScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: CourseOnTermScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [CourseOnTermScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: CourseOnTermScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  CourseOnTermID?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  CreatedTime?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  FK_CourseID?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  FK_TermID?: IntWithAggregatesFilter | undefined;
}
