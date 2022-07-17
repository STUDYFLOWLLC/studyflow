import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseCreateNestedOneWithoutCourseOnTermInput } from "../inputs/CourseCreateNestedOneWithoutCourseOnTermInput";
import { TaskCreateNestedManyWithoutFK_CourseOnTermInput } from "../inputs/TaskCreateNestedManyWithoutFK_CourseOnTermInput";
import { TermCreateNestedOneWithoutFK_CourseOnTermInput } from "../inputs/TermCreateNestedOneWithoutFK_CourseOnTermInput";

@TypeGraphQL.InputType("CourseOnTermCreateWithoutFK_FlowsInput", {
  isAbstract: true
})
export class CourseOnTermCreateWithoutFK_FlowsInput {
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

  @TypeGraphQL.Field(_type => TaskCreateNestedManyWithoutFK_CourseOnTermInput, {
    nullable: true
  })
  FK_Tasks?: TaskCreateNestedManyWithoutFK_CourseOnTermInput | undefined;
}
