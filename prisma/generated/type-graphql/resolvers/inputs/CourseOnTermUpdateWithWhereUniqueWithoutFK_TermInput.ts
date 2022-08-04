import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseOnTermUpdateWithoutFK_TermInput } from "../inputs/CourseOnTermUpdateWithoutFK_TermInput";
import { CourseOnTermWhereUniqueInput } from "../inputs/CourseOnTermWhereUniqueInput";

@TypeGraphQL.InputType("CourseOnTermUpdateWithWhereUniqueWithoutFK_TermInput", {
  isAbstract: true
})
export class CourseOnTermUpdateWithWhereUniqueWithoutFK_TermInput {
  @TypeGraphQL.Field(_type => CourseOnTermWhereUniqueInput, {
    nullable: false
  })
  where!: CourseOnTermWhereUniqueInput;

  @TypeGraphQL.Field(_type => CourseOnTermUpdateWithoutFK_TermInput, {
    nullable: false
  })
  data!: CourseOnTermUpdateWithoutFK_TermInput;
}
