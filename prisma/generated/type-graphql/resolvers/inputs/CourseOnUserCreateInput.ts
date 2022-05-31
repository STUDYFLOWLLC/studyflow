import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseCreateNestedOneWithoutFK_UsersInput } from "../inputs/CourseCreateNestedOneWithoutFK_UsersInput";
import { UserCreateNestedOneWithoutFK_CoursesInput } from "../inputs/UserCreateNestedOneWithoutFK_CoursesInput";

@TypeGraphQL.InputType("CourseOnUserCreateInput", {
  isAbstract: true
})
export class CourseOnUserCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  HOLDER?: string | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutFK_CoursesInput, {
    nullable: true
  })
  FK_User?: UserCreateNestedOneWithoutFK_CoursesInput | undefined;

  @TypeGraphQL.Field(_type => CourseCreateNestedOneWithoutFK_UsersInput, {
    nullable: true
  })
  FK_Course?: CourseCreateNestedOneWithoutFK_UsersInput | undefined;
}
