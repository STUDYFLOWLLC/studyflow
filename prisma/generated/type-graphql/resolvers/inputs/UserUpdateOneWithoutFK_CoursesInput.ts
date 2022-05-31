import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutFK_CoursesInput } from "../inputs/UserCreateOrConnectWithoutFK_CoursesInput";
import { UserCreateWithoutFK_CoursesInput } from "../inputs/UserCreateWithoutFK_CoursesInput";
import { UserUpdateWithoutFK_CoursesInput } from "../inputs/UserUpdateWithoutFK_CoursesInput";
import { UserUpsertWithoutFK_CoursesInput } from "../inputs/UserUpsertWithoutFK_CoursesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneWithoutFK_CoursesInput", {
  isAbstract: true
})
export class UserUpdateOneWithoutFK_CoursesInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutFK_CoursesInput, {
    nullable: true
  })
  create?: UserCreateWithoutFK_CoursesInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutFK_CoursesInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutFK_CoursesInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutFK_CoursesInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutFK_CoursesInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutFK_CoursesInput, {
    nullable: true
  })
  update?: UserUpdateWithoutFK_CoursesInput | undefined;
}
