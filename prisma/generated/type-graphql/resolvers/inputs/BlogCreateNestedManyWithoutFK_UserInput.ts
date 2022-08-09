import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BlogCreateManyFK_UserInputEnvelope } from "../inputs/BlogCreateManyFK_UserInputEnvelope";
import { BlogCreateOrConnectWithoutFK_UserInput } from "../inputs/BlogCreateOrConnectWithoutFK_UserInput";
import { BlogCreateWithoutFK_UserInput } from "../inputs/BlogCreateWithoutFK_UserInput";
import { BlogWhereUniqueInput } from "../inputs/BlogWhereUniqueInput";

@TypeGraphQL.InputType("BlogCreateNestedManyWithoutFK_UserInput", {
  isAbstract: true
})
export class BlogCreateNestedManyWithoutFK_UserInput {
  @TypeGraphQL.Field(_type => [BlogCreateWithoutFK_UserInput], {
    nullable: true
  })
  create?: BlogCreateWithoutFK_UserInput[] | undefined;

  @TypeGraphQL.Field(_type => [BlogCreateOrConnectWithoutFK_UserInput], {
    nullable: true
  })
  connectOrCreate?: BlogCreateOrConnectWithoutFK_UserInput[] | undefined;

  @TypeGraphQL.Field(_type => BlogCreateManyFK_UserInputEnvelope, {
    nullable: true
  })
  createMany?: BlogCreateManyFK_UserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [BlogWhereUniqueInput], {
    nullable: true
  })
  connect?: BlogWhereUniqueInput[] | undefined;
}
