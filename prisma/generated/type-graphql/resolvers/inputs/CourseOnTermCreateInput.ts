import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseCreateNestedOneWithoutFK_TermsOnCourseInput } from "../inputs/CourseCreateNestedOneWithoutFK_TermsOnCourseInput";
import { FlowCreateNestedManyWithoutCourseOnTermInput } from "../inputs/FlowCreateNestedManyWithoutCourseOnTermInput";
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
    nullable: true
  })
  FK_Course?: CourseCreateNestedOneWithoutFK_TermsOnCourseInput | undefined;

  @TypeGraphQL.Field(_type => TermCreateNestedOneWithoutFK_CourseOnTermInput, {
    nullable: true
  })
  FK_Term?: TermCreateNestedOneWithoutFK_CourseOnTermInput | undefined;

  @TypeGraphQL.Field(_type => FlowCreateNestedManyWithoutCourseOnTermInput, {
    nullable: true
  })
  FK_Flows?: FlowCreateNestedManyWithoutCourseOnTermInput | undefined;
}
