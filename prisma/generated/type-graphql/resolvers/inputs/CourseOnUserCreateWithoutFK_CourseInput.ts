import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutFK_CoursesInput } from "../inputs/UserCreateNestedOneWithoutFK_CoursesInput";

@TypeGraphQL.InputType("CourseOnUserCreateWithoutFK_CourseInput", {
  isAbstract: true
})
export class CourseOnUserCreateWithoutFK_CourseInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  HOLDER?: string | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutFK_CoursesInput, {
    nullable: true
  })
  FK_User?: UserCreateNestedOneWithoutFK_CoursesInput | undefined;
}
