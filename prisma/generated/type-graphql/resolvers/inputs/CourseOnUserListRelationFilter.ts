import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseOnUserWhereInput } from "../inputs/CourseOnUserWhereInput";

@TypeGraphQL.InputType("CourseOnUserListRelationFilter", {
  isAbstract: true
})
export class CourseOnUserListRelationFilter {
  @TypeGraphQL.Field(_type => CourseOnUserWhereInput, {
    nullable: true
  })
  every?: CourseOnUserWhereInput | undefined;

  @TypeGraphQL.Field(_type => CourseOnUserWhereInput, {
    nullable: true
  })
  some?: CourseOnUserWhereInput | undefined;

  @TypeGraphQL.Field(_type => CourseOnUserWhereInput, {
    nullable: true
  })
  none?: CourseOnUserWhereInput | undefined;
}
