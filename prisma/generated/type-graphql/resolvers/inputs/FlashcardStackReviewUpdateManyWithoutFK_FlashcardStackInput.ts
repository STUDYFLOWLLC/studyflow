import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FlashcardStackReviewCreateManyFK_FlashcardStackInputEnvelope } from "../inputs/FlashcardStackReviewCreateManyFK_FlashcardStackInputEnvelope";
import { FlashcardStackReviewCreateOrConnectWithoutFK_FlashcardStackInput } from "../inputs/FlashcardStackReviewCreateOrConnectWithoutFK_FlashcardStackInput";
import { FlashcardStackReviewCreateWithoutFK_FlashcardStackInput } from "../inputs/FlashcardStackReviewCreateWithoutFK_FlashcardStackInput";
import { FlashcardStackReviewScalarWhereInput } from "../inputs/FlashcardStackReviewScalarWhereInput";
import { FlashcardStackReviewUpdateManyWithWhereWithoutFK_FlashcardStackInput } from "../inputs/FlashcardStackReviewUpdateManyWithWhereWithoutFK_FlashcardStackInput";
import { FlashcardStackReviewUpdateWithWhereUniqueWithoutFK_FlashcardStackInput } from "../inputs/FlashcardStackReviewUpdateWithWhereUniqueWithoutFK_FlashcardStackInput";
import { FlashcardStackReviewUpsertWithWhereUniqueWithoutFK_FlashcardStackInput } from "../inputs/FlashcardStackReviewUpsertWithWhereUniqueWithoutFK_FlashcardStackInput";
import { FlashcardStackReviewWhereUniqueInput } from "../inputs/FlashcardStackReviewWhereUniqueInput";

@TypeGraphQL.InputType("FlashcardStackReviewUpdateManyWithoutFK_FlashcardStackInput", {
  isAbstract: true
})
export class FlashcardStackReviewUpdateManyWithoutFK_FlashcardStackInput {
  @TypeGraphQL.Field(_type => [FlashcardStackReviewCreateWithoutFK_FlashcardStackInput], {
    nullable: true
  })
  create?: FlashcardStackReviewCreateWithoutFK_FlashcardStackInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlashcardStackReviewCreateOrConnectWithoutFK_FlashcardStackInput], {
    nullable: true
  })
  connectOrCreate?: FlashcardStackReviewCreateOrConnectWithoutFK_FlashcardStackInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlashcardStackReviewUpsertWithWhereUniqueWithoutFK_FlashcardStackInput], {
    nullable: true
  })
  upsert?: FlashcardStackReviewUpsertWithWhereUniqueWithoutFK_FlashcardStackInput[] | undefined;

  @TypeGraphQL.Field(_type => FlashcardStackReviewCreateManyFK_FlashcardStackInputEnvelope, {
    nullable: true
  })
  createMany?: FlashcardStackReviewCreateManyFK_FlashcardStackInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [FlashcardStackReviewWhereUniqueInput], {
    nullable: true
  })
  set?: FlashcardStackReviewWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlashcardStackReviewWhereUniqueInput], {
    nullable: true
  })
  disconnect?: FlashcardStackReviewWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlashcardStackReviewWhereUniqueInput], {
    nullable: true
  })
  delete?: FlashcardStackReviewWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlashcardStackReviewWhereUniqueInput], {
    nullable: true
  })
  connect?: FlashcardStackReviewWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlashcardStackReviewUpdateWithWhereUniqueWithoutFK_FlashcardStackInput], {
    nullable: true
  })
  update?: FlashcardStackReviewUpdateWithWhereUniqueWithoutFK_FlashcardStackInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlashcardStackReviewUpdateManyWithWhereWithoutFK_FlashcardStackInput], {
    nullable: true
  })
  updateMany?: FlashcardStackReviewUpdateManyWithWhereWithoutFK_FlashcardStackInput[] | undefined;

  @TypeGraphQL.Field(_type => [FlashcardStackReviewScalarWhereInput], {
    nullable: true
  })
  deleteMany?: FlashcardStackReviewScalarWhereInput[] | undefined;
}
