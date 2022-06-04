import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateManyFK_SchoolInputEnvelope } from "../inputs/UserCreateManyFK_SchoolInputEnvelope";
import { UserCreateOrConnectWithoutFK_SchoolInput } from "../inputs/UserCreateOrConnectWithoutFK_SchoolInput";
import { UserCreateWithoutFK_SchoolInput } from "../inputs/UserCreateWithoutFK_SchoolInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedManyWithoutFK_SchoolInput", {
  isAbstract: true
})
export class UserCreateNestedManyWithoutFK_SchoolInput {
  @TypeGraphQL.Field(_type => [UserCreateWithoutFK_SchoolInput], {
    nullable: true
  })
  create?: UserCreateWithoutFK_SchoolInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserCreateOrConnectWithoutFK_SchoolInput], {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutFK_SchoolInput[] | undefined;

  @TypeGraphQL.Field(_type => UserCreateManyFK_SchoolInputEnvelope, {
    nullable: true
  })
  createMany?: UserCreateManyFK_SchoolInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  connect?: UserWhereUniqueInput[] | undefined;
}
