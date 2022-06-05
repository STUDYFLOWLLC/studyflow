import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseCreateNestedOneWithoutFK_TermsOnCourseInput } from "../inputs/CourseCreateNestedOneWithoutFK_TermsOnCourseInput";
import { FlowCreateNestedManyWithoutFK_CourseOnTermInput } from "../inputs/FlowCreateNestedManyWithoutFK_CourseOnTermInput";
import { TermCreateNestedOneWithoutFK_CourseOnTermInput } from "../inputs/TermCreateNestedOneWithoutFK_CourseOnTermInput";

@TypeGraphQL.InputType("CourseOnTermCreateInput", {
  isAbstract: true
})
export class CourseOnTermCreateInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  CreatedTime?: Date | undefined;

  @TypeGraphQL.Field(_type => CourseCreateNestedOneWithoutFK_TermsOnCourseInput, {
    nullable: false
  })
  FK_Course!: CourseCreateNestedOneWithoutFK_TermsOnCourseInput;

  @TypeGraphQL.Field(_type => TermCreateNestedOneWithoutFK_CourseOnTermInput, {
    nullable: false
  })
  FK_Term!: TermCreateNestedOneWithoutFK_CourseOnTermInput;

  @TypeGraphQL.Field(_type => FlowCreateNestedManyWithoutFK_CourseOnTermInput, {
    nullable: true
  })
  FK_Flows?: FlowCreateNestedManyWithoutFK_CourseOnTermInput | undefined;
}
