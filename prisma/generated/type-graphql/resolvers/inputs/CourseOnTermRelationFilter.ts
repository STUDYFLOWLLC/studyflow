import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseOnTermWhereInput } from "../inputs/CourseOnTermWhereInput";

@TypeGraphQL.InputType("CourseOnTermRelationFilter", {
  isAbstract: true
})
export class CourseOnTermRelationFilter {
  @TypeGraphQL.Field(_type => CourseOnTermWhereInput, {
    nullable: true
  })
  is?: CourseOnTermWhereInput | undefined;

  @TypeGraphQL.Field(_type => CourseOnTermWhereInput, {
    nullable: true
  })
  isNot?: CourseOnTermWhereInput | undefined;
}
