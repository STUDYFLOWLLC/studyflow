import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlashcardCreateManyFK_FlashcardStackInputEnvelope } from "../inputs/FlashcardCreateManyFK_FlashcardStackInputEnvelope";
import { FlashcardCreateOrConnectWithoutFK_FlashcardStackInput } from "../inputs/FlashcardCreateOrConnectWithoutFK_FlashcardStackInput";
import { FlashcardCreateWithoutFK_FlashcardStackInput } from "../inputs/FlashcardCreateWithoutFK_FlashcardStackInput";
import { FlashcardWhereUniqueInput } from "../inputs/FlashcardWhereUniqueInput";

@TypeGraphQL.InputType("FlashcardCreateNestedManyWithoutFK_FlashcardStackInput", {
  isAbstract: true
})
export class FlashcardCreateNestedManyWithoutFK_FlashcardStackInput {
  @TypeGraphQL.Field(_type => [FlashcardCreateWithoutFK_FlashcardStackInput], {
    nullable: true
  })
  create?: FlashcardCreateWithoutFK_FlashcardStackInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlashcardCreateOrConnectWithoutFK_FlashcardStackInput], {
    nullable: true
  })
  connectOrCreate?: FlashcardCreateOrConnectWithoutFK_FlashcardStackInput[] | undefined;

  @TypeGraphQL.Field(_type => FlashcardCreateManyFK_FlashcardStackInputEnvelope, {
    nullable: true
  })
  createMany?: FlashcardCreateManyFK_FlashcardStackInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [FlashcardWhereUniqueInput], {
    nullable: true
  })
  connect?: FlashcardWhereUniqueInput[] | undefined;
}
