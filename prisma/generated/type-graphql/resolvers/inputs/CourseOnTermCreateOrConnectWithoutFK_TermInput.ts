import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseOnTermCreateWithoutFK_TermInput } from "../inputs/CourseOnTermCreateWithoutFK_TermInput";
import { CourseOnTermWhereUniqueInput } from "../inputs/CourseOnTermWhereUniqueInput";

@TypeGraphQL.InputType("CourseOnTermCreateOrConnectWithoutFK_TermInput", {
  isAbstract: true
})
export class CourseOnTermCreateOrConnectWithoutFK_TermInput {
  @TypeGraphQL.Field(_type => CourseOnTermWhereUniqueInput, {
    nullable: false
  })
  where!: CourseOnTermWhereUniqueInput;

  @TypeGraphQL.Field(_type => CourseOnTermCreateWithoutFK_TermInput, {
    nullable: false
  })
  create!: CourseOnTermCreateWithoutFK_TermInput;
}
