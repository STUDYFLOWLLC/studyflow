import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlashCardStackCreateManyFK_UserInputEnvelope } from "../inputs/FlashCardStackCreateManyFK_UserInputEnvelope";
import { FlashCardStackCreateOrConnectWithoutFK_UserInput } from "../inputs/FlashCardStackCreateOrConnectWithoutFK_UserInput";
import { FlashCardStackCreateWithoutFK_UserInput } from "../inputs/FlashCardStackCreateWithoutFK_UserInput";
import { FlashCardStackWhereUniqueInput } from "../inputs/FlashCardStackWhereUniqueInput";

@TypeGraphQL.InputType("FlashCardStackCreateNestedManyWithoutFK_UserInput", {
  isAbstract: true
})
export class FlashCardStackCreateNestedManyWithoutFK_UserInput {
  @TypeGraphQL.Field(_type => [FlashCardStackCreateWithoutFK_UserInput], {
    nullable: true
  })
  create?: FlashCardStackCreateWithoutFK_UserInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlashCardStackCreateOrConnectWithoutFK_UserInput], {
    nullable: true
  })
  connectOrCreate?: FlashCardStackCreateOrConnectWithoutFK_UserInput[] | undefined;

  @TypeGraphQL.Field(_type => FlashCardStackCreateManyFK_UserInputEnvelope, {
    nullable: true
  })
  createMany?: FlashCardStackCreateManyFK_UserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [FlashCardStackWhereUniqueInput], {
    nullable: true
  })
  connect?: FlashCardStackWhereUniqueInput[] | undefined;
}
