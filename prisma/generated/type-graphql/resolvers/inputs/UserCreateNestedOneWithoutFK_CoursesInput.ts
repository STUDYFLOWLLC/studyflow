import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutFK_CoursesInput } from "../inputs/UserCreateOrConnectWithoutFK_CoursesInput";
import { UserCreateWithoutFK_CoursesInput } from "../inputs/UserCreateWithoutFK_CoursesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutFK_CoursesInput", {
  isAbstract: true
})
export class UserCreateNestedOneWithoutFK_CoursesInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutFK_CoursesInput, {
    nullable: true
  })
  create?: UserCreateWithoutFK_CoursesInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutFK_CoursesInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutFK_CoursesInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
