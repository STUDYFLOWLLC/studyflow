import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SchoolCreateOrConnectWithoutFK_UserInput } from "../inputs/SchoolCreateOrConnectWithoutFK_UserInput";
import { SchoolCreateWithoutFK_UserInput } from "../inputs/SchoolCreateWithoutFK_UserInput";
import { SchoolWhereUniqueInput } from "../inputs/SchoolWhereUniqueInput";

@TypeGraphQL.InputType("SchoolCreateNestedOneWithoutFK_UserInput", {
  isAbstract: true
})
export class SchoolCreateNestedOneWithoutFK_UserInput {
  @TypeGraphQL.Field(_type => SchoolCreateWithoutFK_UserInput, {
    nullable: true
  })
  create?: SchoolCreateWithoutFK_UserInput | undefined;

  @TypeGraphQL.Field(_type => SchoolCreateOrConnectWithoutFK_UserInput, {
    nullable: true
  })
  connectOrCreate?: SchoolCreateOrConnectWithoutFK_UserInput | undefined;

  @TypeGraphQL.Field(_type => SchoolWhereUniqueInput, {
    nullable: true
  })
  connect?: SchoolWhereUniqueInput | undefined;
}
