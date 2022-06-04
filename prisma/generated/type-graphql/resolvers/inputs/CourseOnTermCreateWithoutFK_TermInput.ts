import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseCreateNestedOneWithoutFK_TermsOnCourseInput } from "../inputs/CourseCreateNestedOneWithoutFK_TermsOnCourseInput";
import { FlowCreateNestedManyWithoutCourseOnTermInput } from "../inputs/FlowCreateNestedManyWithoutCourseOnTermInput";

@TypeGraphQL.InputType("CourseOnTermCreateWithoutFK_TermInput", {
  isAbstract: true
})
export class CourseOnTermCreateWithoutFK_TermInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  CreatedTime?: Date | undefined;

  @TypeGraphQL.Field(_type => CourseCreateNestedOneWithoutFK_TermsOnCourseInput, {
    nullable: true
  })
  FK_Course?: CourseCreateNestedOneWithoutFK_TermsOnCourseInput | undefined;

  @TypeGraphQL.Field(_type => FlowCreateNestedManyWithoutCourseOnTermInput, {
    nullable: true
  })
  FK_Flows?: FlowCreateNestedManyWithoutCourseOnTermInput | undefined;
}
