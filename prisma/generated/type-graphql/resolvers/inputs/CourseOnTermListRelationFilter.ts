import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseOnTermWhereInput } from "../inputs/CourseOnTermWhereInput";

@TypeGraphQL.InputType("CourseOnTermListRelationFilter", {
  isAbstract: true
})
export class CourseOnTermListRelationFilter {
  @TypeGraphQL.Field(_type => CourseOnTermWhereInput, {
    nullable: true
  })
  every?: CourseOnTermWhereInput | undefined;

  @TypeGraphQL.Field(_type => CourseOnTermWhereInput, {
    nullable: true
  })
  some?: CourseOnTermWhereInput | undefined;

  @TypeGraphQL.Field(_type => CourseOnTermWhereInput, {
    nullable: true
  })
  none?: CourseOnTermWhereInput | undefined;
}
