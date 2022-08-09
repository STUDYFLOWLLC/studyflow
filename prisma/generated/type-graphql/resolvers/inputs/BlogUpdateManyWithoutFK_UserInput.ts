import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BlogCreateManyFK_UserInputEnvelope } from "../inputs/BlogCreateManyFK_UserInputEnvelope";
import { BlogCreateOrConnectWithoutFK_UserInput } from "../inputs/BlogCreateOrConnectWithoutFK_UserInput";
import { BlogCreateWithoutFK_UserInput } from "../inputs/BlogCreateWithoutFK_UserInput";
import { BlogScalarWhereInput } from "../inputs/BlogScalarWhereInput";
import { BlogUpdateManyWithWhereWithoutFK_UserInput } from "../inputs/BlogUpdateManyWithWhereWithoutFK_UserInput";
import { BlogUpdateWithWhereUniqueWithoutFK_UserInput } from "../inputs/BlogUpdateWithWhereUniqueWithoutFK_UserInput";
import { BlogUpsertWithWhereUniqueWithoutFK_UserInput } from "../inputs/BlogUpsertWithWhereUniqueWithoutFK_UserInput";
import { BlogWhereUniqueInput } from "../inputs/BlogWhereUniqueInput";

@TypeGraphQL.InputType("BlogUpdateManyWithoutFK_UserInput", {
  isAbstract: true
})
export class BlogUpdateManyWithoutFK_UserInput {
  @TypeGraphQL.Field(_type => [BlogCreateWithoutFK_UserInput], {
    nullable: true
  })
  create?: BlogCreateWithoutFK_UserInput[] | undefined;

  @TypeGraphQL.Field(_type => [BlogCreateOrConnectWithoutFK_UserInput], {
    nullable: true
  })
  connectOrCreate?: BlogCreateOrConnectWithoutFK_UserInput[] | undefined;

  @TypeGraphQL.Field(_type => [BlogUpsertWithWhereUniqueWithoutFK_UserInput], {
    nullable: true
  })
  upsert?: BlogUpsertWithWhereUniqueWithoutFK_UserInput[] | undefined;

  @TypeGraphQL.Field(_type => BlogCreateManyFK_UserInputEnvelope, {
    nullable: true
  })
  createMany?: BlogCreateManyFK_UserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [BlogWhereUniqueInput], {
    nullable: true
  })
  set?: BlogWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [BlogWhereUniqueInput], {
    nullable: true
  })
  disconnect?: BlogWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [BlogWhereUniqueInput], {
    nullable: true
  })
  delete?: BlogWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [BlogWhereUniqueInput], {
    nullable: true
  })
  connect?: BlogWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [BlogUpdateWithWhereUniqueWithoutFK_UserInput], {
    nullable: true
  })
  update?: BlogUpdateWithWhereUniqueWithoutFK_UserInput[] | undefined;

  @TypeGraphQL.Field(_type => [BlogUpdateManyWithWhereWithoutFK_UserInput], {
    nullable: true
  })
  updateMany?: BlogUpdateManyWithWhereWithoutFK_UserInput[] | undefined;

  @TypeGraphQL.Field(_type => [BlogScalarWhereInput], {
    nullable: true
  })
  deleteMany?: BlogScalarWhereInput[] | undefined;
}
