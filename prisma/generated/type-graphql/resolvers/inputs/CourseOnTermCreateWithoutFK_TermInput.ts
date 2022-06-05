import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseCreateNestedOneWithoutFK_TermsOnCourseInput } from "../inputs/CourseCreateNestedOneWithoutFK_TermsOnCourseInput";
import { FlowCreateNestedManyWithoutFK_CourseOnTermInput } from "../inputs/FlowCreateNestedManyWithoutFK_CourseOnTermInput";

@TypeGraphQL.InputType("CourseOnTermCreateWithoutFK_TermInput", {
  isAbstract: true
})
export class CourseOnTermCreateWithoutFK_TermInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  CreatedTime?: Date | undefined;

  @TypeGraphQL.Field(_type => CourseCreateNestedOneWithoutFK_TermsOnCourseInput, {
    nullable: false
  })
  FK_Course!: CourseCreateNestedOneWithoutFK_TermsOnCourseInput;

  @TypeGraphQL.Field(_type => FlowCreateNestedManyWithoutFK_CourseOnTermInput, {
    nullable: true
  })
  FK_Flows?: FlowCreateNestedManyWithoutFK_CourseOnTermInput | undefined;
}
