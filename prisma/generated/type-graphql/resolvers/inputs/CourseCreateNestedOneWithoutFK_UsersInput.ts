import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseCreateOrConnectWithoutFK_UsersInput } from "../inputs/CourseCreateOrConnectWithoutFK_UsersInput";
import { CourseCreateWithoutFK_UsersInput } from "../inputs/CourseCreateWithoutFK_UsersInput";
import { CourseWhereUniqueInput } from "../inputs/CourseWhereUniqueInput";

@TypeGraphQL.InputType("CourseCreateNestedOneWithoutFK_UsersInput", {
  isAbstract: true
})
export class CourseCreateNestedOneWithoutFK_UsersInput {
  @TypeGraphQL.Field(_type => CourseCreateWithoutFK_UsersInput, {
    nullable: true
  })
  create?: CourseCreateWithoutFK_UsersInput | undefined;

  @TypeGraphQL.Field(_type => CourseCreateOrConnectWithoutFK_UsersInput, {
    nullable: true
  })
  connectOrCreate?: CourseCreateOrConnectWithoutFK_UsersInput | undefined;

  @TypeGraphQL.Field(_type => CourseWhereUniqueInput, {
    nullable: true
  })
  connect?: CourseWhereUniqueInput | undefined;
}
