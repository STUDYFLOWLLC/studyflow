import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseCreateNestedOneWithoutCourseOnTermInput } from "../inputs/CourseCreateNestedOneWithoutCourseOnTermInput";
import { CourseOnTermAutomationCreateNestedManyWithoutFK_CourseOnTermInput } from "../inputs/CourseOnTermAutomationCreateNestedManyWithoutFK_CourseOnTermInput";
import { FlowCreateNestedManyWithoutFK_CourseOnTermInput } from "../inputs/FlowCreateNestedManyWithoutFK_CourseOnTermInput";
import { TermCreateNestedOneWithoutFK_CourseOnTermInput } from "../inputs/TermCreateNestedOneWithoutFK_CourseOnTermInput";

@TypeGraphQL.InputType("CourseOnTermCreateWithoutFK_TasksInput", {
  isAbstract: true
})
export class CourseOnTermCreateWithoutFK_TasksInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  CreatedTime?: Date | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  Index?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  Color?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  Nickname?: string | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  IsNew?: boolean | undefined;

  @TypeGraphQL.Field(_type => CourseCreateNestedOneWithoutCourseOnTermInput, {
    nullable: true
  })
  FK_Course?: CourseCreateNestedOneWithoutCourseOnTermInput | undefined;

  @TypeGraphQL.Field(_type => TermCreateNestedOneWithoutFK_CourseOnTermInput, {
    nullable: true
  })
  FK_Term?: TermCreateNestedOneWithoutFK_CourseOnTermInput | undefined;

  @TypeGraphQL.Field(_type => FlowCreateNestedManyWithoutFK_CourseOnTermInput, {
    nullable: true
  })
  FK_Flows?: FlowCreateNestedManyWithoutFK_CourseOnTermInput | undefined;

  @TypeGraphQL.Field(_type => CourseOnTermAutomationCreateNestedManyWithoutFK_CourseOnTermInput, {
    nullable: true
  })
  CourseOnTermAutomation?: CourseOnTermAutomationCreateNestedManyWithoutFK_CourseOnTermInput | undefined;
}
