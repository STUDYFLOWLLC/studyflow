import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntNullableWithAggregatesFilter } from "../inputs/IntNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";

@TypeGraphQL.InputType("CourseOnUserScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class CourseOnUserScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [CourseOnUserScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: CourseOnUserScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [CourseOnUserScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: CourseOnUserScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [CourseOnUserScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: CourseOnUserScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  CourseOnUserID?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  HOLDER?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableWithAggregatesFilter, {
    nullable: true
  })
  FK_UserID?: IntNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableWithAggregatesFilter, {
    nullable: true
  })
  FK_CourseID?: IntNullableWithAggregatesFilter | undefined;
}
