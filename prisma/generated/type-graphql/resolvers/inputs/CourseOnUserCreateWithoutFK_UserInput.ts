import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseCreateNestedOneWithoutFK_UsersInput } from "../inputs/CourseCreateNestedOneWithoutFK_UsersInput";

@TypeGraphQL.InputType("CourseOnUserCreateWithoutFK_UserInput", {
  isAbstract: true
})
export class CourseOnUserCreateWithoutFK_UserInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  HOLDER?: string | undefined;

  @TypeGraphQL.Field(_type => CourseCreateNestedOneWithoutFK_UsersInput, {
    nullable: true
  })
  FK_Course?: CourseCreateNestedOneWithoutFK_UsersInput | undefined;
}
